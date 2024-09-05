import {
    Router,
    Request,
    Response
} from "express";
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

import { SnipeItData } from "./interface";
import { validateApiKeyMiddleware } from "./middleware";


const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).send('CONNECT OKAY')

})

routes.get('/reports/activity', [validateApiKeyMiddleware],
    async (req: Request, res: Response): Promise < Response >=> {
        let offset = parseInt(req.query.offset as string) || 0;
        let limit = parseInt(req.query.limit as string) || 10;

        const query = `${process.env.SNIPEIT_BASE_URL}${process.env.SNIPEIT_REPORTS_PATH}?limit=${limit}&offset=${offset}`;
        console.log(query)
        try {
            const activityReport = await axios.get(`${query}`, {
                headers: {
                    Authorization: `Bearer ${process.env.SNIPEIT_API_TOKEN}`
                }
            });

            if (activityReport.status !== 200) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: `Error on SnipeIT Activity Report Data`
                });
            }
            const activityReportData: SnipeItData[] = activityReport.data.rows;
            console.log(activityReportData)

            return res.status(200).json({
                message: 'Success',
                data: activityReportData
            })


        } catch (error) {
            console.error('Error fetching activity report:', error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Error fetching activity report data',
            });
        }

    })



export default routes;