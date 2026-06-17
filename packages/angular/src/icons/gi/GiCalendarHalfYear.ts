import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-calendar-half-year",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCalendarHalfYear {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M25 57v30h62V57H25zm160 0v62h62V57h-62zm80 0v14h62V57h-62zm80 0v39h62V57h-62zm80 0v78h62V57h-62zM105 73v78h62V73h-62zm160 16v78h62V89h-62zM25 105v78h62v-78H25zm320 9v78h62v-78h-62zm-160 23v78h62v-78h-62zm240 16v78h62v-78h-62zm-320 16v78h62v-78h-62zm160 16v78h62v-78h-62zM25 201v78h62v-78H25zm320 9v78h62v-78h-62zm-160 23v78h62v-78h-62zm240 16v78h62v-78h-62zm-320 16v78h62v-78h-62zm160 16v78h62v-78h-62zM25 297v78h62v-78H25zm320 9v78h62v-78h-62zm-160 23v78h62v-78h-62zm240 16v78h62v-78h-62zm-320 16v94h62v-94h-62zm160 16v78h62v-78h-62zM25 393v78h62v-78H25zm320 9v69h62v-69h-62zm-160 23v46h62v-46h-62zm240 16v14h62v-14h-62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCalendarHalfYear;
