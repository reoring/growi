import React from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';

/**
 *
 * @author Yuki Takei <yuki@weseek.co.jp>
 *
 * @export
 * @class PageTagForm
 * @extends {React.Component}
 */

export default class PageTagForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pageTags: this.props.pageTags,
      emptyLabel: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectTag = this.selectTag.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pageTags: nextProps.pageTags
    });
  }

  handleSubmit(e) {

  }

  selectTag(selected) {
    this.setState({pageTags: this.state.pageTags.push(selected)});
  }

  render() {
    const options = [
      'John',
      'Miles',
      'Charles',
      'Herbie',
    ];
    return (
      <div className="tag-typeahead">
        <Typeahead
          multiple={true}
          labelKey="name"
          emptyLabel={''}
          options={options}
          placeholder="tag name"
          // onBlur={this.handleSubmit}
          onChange={this.selectTag}
        />
      </div>
    );
  }
}

PageTagForm.propTypes = {
  pageTags: PropTypes.array,
  submitTags: PropTypes.func,
};

PageTagForm.defaultProps = {
};
