import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-checklist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiChecklist {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M122.31 84.62l-2.85 8.54-11.39 34.19-5.7-5.7L96 115.27 83.27 128l6.37 6.36 26.3 26.3 20.61-61.81 2.85-8.54-17.08-5.69zM151 119v18h242v-18H151zm0 64v18h242v-18H151zm0 64v18h242v-18H151zm-28.69 29.62l-2.85 8.54-11.39 34.19-5.7-5.7L96 307.27 83.27 320l6.37 6.36 26.3 26.3 20.61-61.81 2.85-8.54-17.08-5.69zM151 311v18h242v-18H151zm0 64v18h242v-18H151z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiChecklist;
