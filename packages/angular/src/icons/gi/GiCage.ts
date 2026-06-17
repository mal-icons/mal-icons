import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-cage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCage {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M119 75v64H55v346h402V139h-64V75H128zm18 18h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zM73 157h46v18H73zm64 0h46v18h-46zm64 0h46v18h-46zm64 0h46v18h-46zm64 0h46v18h-46zm64 0h46v18h-46zM73 193h46v46H73zm64 0h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zM73 257h46v46H73zm64 0h46v46h-46zm64 0h46v46h-46zm70.51 0h96.98l-26.29 46h20.73L375 281.89v156.22L362.94 417h-20.73l26.29 50h-96.98l26.29-50h-20.73L265 438.11V281.89L277.06 303h20.73zM393 257h46v46h-46zM73 321h46v46H73zm64 0h46v46h-46zm64 0h46v46h-46zm88 0v78h62v-78zm104 0h46v46h-46zm-73 10.04c7.73 0 14 6.27 14 14a14 14 0 0 1-5.19 10.87l5.19 31.13h-28l5.19-31.13a14 14 0 0 1-5.19-10.86c0-7.73 6.27-14 14-14zM73 385h46v46H73zm64 0h46v46h-46zm64 0h46v46h-46zm192 0h46v46h-46zM73 449h46v18H73zm64 0h46v18h-46zm64 0h46v18h-46zm192 0h46v18h-46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCage;
