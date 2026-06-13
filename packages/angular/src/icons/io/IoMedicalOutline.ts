import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-medical-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoMedicalOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M429.93,174.27l-16.47-28.59a15.49,15.49,0,0,0-21.15-5.7l-98.39,57a4,4,0,0,1-6-3.5L288,80a16,16,0,0,0-16-16H240a16,16,0,0,0-16,16l0.07,113.57a4,4,0,0,1-6,3.5l-98.39-57a15.49,15.49,0,0,0-21.15,5.7L82.07,174.37a15.42,15.42,0,0,0,5.69,21.1l98.49,57.08a4,4,0,0,1,0,6.9L87.76,316.53a15.54,15.54,0,0,0-5.69,21.1l16.47,28.59a15.49,15.49,0,0,0,21.15,5.7l98.39-57a4,4,0,0,1,6,3.5L224,432a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16l-0.07-113.67a4,4,0,0,1,6-3.5l98.39,57a15.49,15.49,0,0,0,21.15-5.7l16.47-28.59a15.42,15.42,0,0,0-5.69-21.1l-98.49-57.08a4,4,0,0,1,0-6.9l98.49-57.08A15.51,15.51,0,0,0,429.93,174.27Z","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoMedicalOutline;
