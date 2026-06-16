import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-warning-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWarningOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M483.83-237Q471-237 462.5-245.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5ZM454-378v-128l60 60v68q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T454-378Zm459 246L749-296 480-760l-72 123-43-44 89-154q9-15 26-15t26 15l407 703Zm-769-48h550L346-528 144-180ZM816-59l-62-61H92q-17 0-26-15t0-30l236-407L58-816q-9-9.07-8.5-21.53Q50-850 59.05-859q9.05-9 21.5-9Q93-868 102-859l757 758q9 9 9 21t-9.05 21q-9.05 9-21.5 9Q825-50 816-59ZM520-354Zm58-113Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWarningOff;
