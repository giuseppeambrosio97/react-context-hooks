import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{
                color: theme.color,
                backgroundColor: theme.bg
            }}>
                <ul>
                    <li style={{ backgroundColor: theme.ui }}>Ppeepp</li>
                    <li style={{ backgroundColor: theme.ui }}>fdfdfdfdf</li>
                    <li style={{ backgroundColor: theme.ui }}>fdfdfdfsvsv</li>
                </ul>
            </div>
        );
    }
}

export default BookList;