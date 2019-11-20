import { connect } from 'react-redux';

import { WidgetBody } from '../components/widget/WidgetBody';
import { widgetBodyDataSelector} from '../selectors/forecast-selectors';

const mapStateToProps = (state) => ({
  widgetBodyData: widgetBodyDataSelector(state),
});

export const WidgetBodyContainer = connect(mapStateToProps)(WidgetBody);