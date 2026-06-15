import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-ink-pen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfInkPen {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 0v6.5l5.47 9.5 5.53-9.5v-6.5h-11zM8.47 14h0l0 000zM8.5 6c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zM13 6.23l-4 6.87v-6.17c0.86-0.22 1.5-1 1.5-1.93 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.93 0.64 1.71 1.5 1.93v6.25l-4-6.95v-5.23h9v5.23z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfInkPen;
