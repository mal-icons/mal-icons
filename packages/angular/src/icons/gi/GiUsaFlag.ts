import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-usa-flag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiUsaFlag {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 18v29h238V18H256zm-208 0l-9.4 19.05-21.03 3.06 15.22 14.83L29.19 75.89l18.81-9.89 18.81 9.89-3.59-20.94L78.43 40.11l-21.03-3.05L48 18zm80 0l-9.4 19.05-21.03 3.06 15.22 14.83-3.59 20.95L128 66l18.81 9.89-3.59-20.94 15.22-14.83-21.03-3.05L128 18zm80 0l-9.4 19.05-21.03 3.06 15.22 14.83-3.59 20.95L208 66l18.81 9.89-3.59-20.94 15.22-14.83-21.03-3.05L208 18zm-39.4 54.39L159.19 91.44l-21.03 3.06 15.22 14.83-3.59 20.95 18.81-9.89 18.81 9.89-3.59-20.94 15.22-14.83-21.03-3.06-9.4-19.05zm-80 2L79.19 93.44l-21.03 3.06 15.22 14.83-3.59 20.95 18.81-9.89 18.81 9.89-3.59-20.94 15.22-14.83L98 93.44l-9.4-19.05zM256 81v30h238V81H256zM48 130l-9.4 19.05-21.03 3.06 15.22 14.83-3.59 20.95L48 178l18.81 9.89-3.59-20.94 15.22-14.83-21.03-3.06L48 130zm80 0l-9.4 19.05-21.03 3.06 15.22 14.83-3.59 20.95L128 178l18.81 9.89-3.59-20.94 15.22-14.83-21.03-3.06L128 130zm80 0l-9.4 19.05-21.03 3.06 15.22 14.83-3.59 20.95L208 178l18.81 9.89-3.59-20.94 15.22-14.83-21.03-3.06L208 130zM256 145v30h238v-30H256zM88.6 186.39l-9.4 19.05-21.03 3.06 15.22 14.83-3.59 20.95 18.81-9.89 18.81 9.89-3.59-20.94 15.22-14.83L98 205.44l-9.4-19.05zm800l-9.4 19.05-21.03 3.06 15.22 14.83-3.59 20.95 18.81-9.89 18.81 9.89-3.59-20.94 15.22-14.83-21.03-3.06-9.4-19.05zM256 209v30h238v-30H256zM18 273v30h476v-30H18zm0 64v30h476v-30H18zm0 64v30h476v-30H18zm0 64v29h476v-29H18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiUsaFlag;
