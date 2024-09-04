import { Action, Model, Serializer, surveyLocalization } from "survey-core";
import "survey-core/defaultV2.min.css";
import { Survey } from "survey-react-ui";
import "./index.css";
import { json } from "./json";

Serializer.addProperty(
    "matrixdynamic",
    {
        name: "detailForm",
        category: "data"
    }
);

const engLocale = surveyLocalization.locales["en"];
engLocale.noEntriesText = "Specify an employee name to edit details";

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    survey.onGetMatrixRowActions.add((sender, options) => {
        if (!options.question.detailForm)
            return;
    
        const panel = sender.getQuestionByName(options.question.detailForm);
    
        if (!panel)
            return;
        
        const rowIndex = options.row.rowIndex;
        options.actions.push(new Action({
            id: "select_panel_item",
            title: "Edit Details",
            action: () => {
                panel.currentIndex = rowIndex - 1;
                sender.currentPage = panel.page;
                panel.focus();
            }
        }));
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;