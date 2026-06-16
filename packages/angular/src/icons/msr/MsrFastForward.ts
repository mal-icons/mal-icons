import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-fast-forward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFastForward {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M151-273q-15 11-31 2.5T104-297v-366q0-18 16-26.5t31 2.5l263 182q13 9 13 25t-13 25L151-273Zm407 0q-15 11-31 2.5T511-297v-366q0-18 16-26.5t31 2.5l263 182q13 9 13 25t-13 25L558-273ZM164-480Zm407 0ZM164-355l181-125-181-125v250Zm407 0 181-125-181-125v250Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFastForward;
