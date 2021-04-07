import React from "react";
import {
  StyledDrugaCSS,
  StyledHeader,
  StyledLinkovi,
  StyledParagraf,
  StyledTable,
} from "../../Styles/VjezbaDvaCSS.style";

interface VjezbaDvaCSSProps {}

export const VjezbaDvaCSS: React.FC<VjezbaDvaCSSProps> = ({}) => {
  return (
    <StyledDrugaCSS>
      <StyledHeader>
        <h1>Moj Blog</h1>
        <h2>druga razina naslova</h2>
      </StyledHeader>
      <StyledLinkovi>
        <a href="http://www.youtube.com">Prvi Link</a>
        <a href="http://www.youtube.com">Drugi Link</a>
        <a href="http://www.youtube.com">Treci Link</a>
      </StyledLinkovi>
      <h3>Treći naslov</h3>
      <StyledParagraf>
        <h4>Lorem ipsum</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit
          dapibus magna, eget posuere leo. Quisque libero mi, lobortis a est ut,
          congue pharetra justo. Suspendisse rutrum, sem sed ornare vulputate,
          eros elit pellentesque tellus, vel placerat turpis ex ut tortor. Sed
          cursus vel ipsum vitae imperdiet. Suspendisse dapibus porta enim a
          malesuada. Morbi id leo id lorem suscipit eleifend vitae nec lectus.
          Proin quis elit nisl. Praesent nec metus laoreet, lobortis ante quis,
          rhoncus ligula. Suspendisse potenti. Etiam molestie a sapien id
          sagittis. Curabitur pulvinar dolor enim, sed mollis felis accumsan
          vel. Morbi ut ante suscipit, maximus nunc nec, vestibulum est. In
          aliquam eros vel nulla tempor, vel iaculis metus eleifend. Suspendisse
          sodales accumsan dui.
        </p>
      </StyledParagraf>
      <h1>Kalendar </h1>
      <StyledTable>
        <table>
          <tr>
            <th>Pon</th>
            <th>Uto</th>
            <th>Sri</th>
            <th>Čet</th>
            <th>Pet</th>
            <th>Sub</th>
            <th>Ned</th>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td style={{ backgroundColor: "#00ccff" }}>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
          </tr>
          <tr>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
          </tr>
          <tr>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
          </tr>
          <tr>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </StyledTable>
    </StyledDrugaCSS>
  );
};

export default VjezbaDvaCSS;
