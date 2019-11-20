import { connect } from 'react-redux';

import { WidgetHeader } from '../components/widget/WidgetHeader';
import { widgetHeaderDataSelector } from '../selectors/forecast-selectors';

const mapStateToProps = (state) => ({
  widgetHeaderData: widgetHeaderDataSelector(state),
});

export const WidgetHeaderContainer = connect(mapStateToProps)(WidgetHeader);