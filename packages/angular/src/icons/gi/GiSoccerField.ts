import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-soccer-field",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSoccerField {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M23 119v274h466V119H23zm18 18h206v79.02c-18.25 4.14-32 20.54-32 39.98 0 19.45 13.75 35.85 32 39.98V375H41v-62h64V199H41v-62zm224 0h206v62h-64v114h64v62H265v-79.02c18.25-4.13 32-20.54 32-39.98 0-19.45-13.75-35.85-32-39.98V137zM41 217h46v78H41v-78zm384 0h46v78h-46v-78zm-178 17.79v42.41c-8.27-3.47-14-11.6-14-21.21 0-9.61 5.73-17.74 14-21.21zm18 0c8.27 3.47 14 11.6 14 21.21 0 9.61-5.73 17.74-14 21.21v-42.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSoccerField;
