import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-send-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSendPlus {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.960.69a0.50.5 0 0 0-0.65-0.65L0.77 5.86a0.750.75 0 0 0-0.12 1.33l5 3.18 1.53 2.41a0.50.5 0 0 0 0.84-0.54L6.64 10.07l7.49-7.49-1.89 4.74a0.50.5 0 1 0 0.930.37zm-2.54 1.18L5.93 9.36 1.59 6.6z"}],["path",{"d":"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a0.50.5 0 0 0-0.50.5v1h-1a0.50.5 0 0 0 0 1h1v1a0.50.5 0 0 0 1 0v-1h1a0.50.5 0 0 0 0-1h-1v-1a0.50.5 0 0 0-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSendPlus;
