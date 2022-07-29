import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Badge } from 'antd';

export default class SnyStatus extends Component {
  render() {
    const { status, statusArray, status_vi, type, label, children, tooltip, badge, style, className } = this.props;
    const checkStatus = statusArray.find(item => item.array.includes(status));
    return (
      <Tooltip {...tooltip}>
        <Badge {...badge}>
          <div className={`sny-status ${status && 'w-148'} ${type} ${checkStatus && checkStatus?.color} ${className}`} style={style}>
            {label || children || status_vi}
          </div>
        </Badge>
      </Tooltip>
    );
  }
}

SnyStatus.propTypes = {
  statusArray: PropTypes.array,
  status: PropTypes.string,
  status_vi: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  tooltip: PropTypes.object,
  badge: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
};

SnyStatus.defaultProps = {
  statusArray: [
    { array: ['request_received', 'waiting_for_return', 'returning', 'part_delivery'], color: 'orange' },
    { array: ['processing_picked_up', 'out_for_delivery', 'picked_up'], color: 'blue' },
    { array: ['import_picking_warehouse', 'on_the_way', 'import_returning_warehouse', 'returned'], color: 'cyan' },
    { array: ['picked_up_fail', 'undeliverable', 'return_fail', 'canceled'], color: 'red' },
    { array: ['processing_on_the_way', 'on_the_way_returning'], color: 'purple' },
    { array: ['delivered'], color: 'green' },
  ],
  status: undefined,
  status_vi: 'SnappyExpress',
  type: '',
  label: undefined,
  children: undefined,
  tooltip: {},
  badge: {},
  style: {},
  className:'',
};
