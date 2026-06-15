import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-control-shuffle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfControlShuffle {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.94 6.87l1.08-1.3400c0.86-0.97 2.09-1.53 3.38-1.53h1.9l-1.65-1.65 0.71-0.71 2.85 2.85-2.85 2.85-0.71-0.71 1.65-1.65h-1.9c-0.99 0-1.93 0.43-2.59 1.16l-1.08 1.34-0.78-0.63zM5.85 10.7l-0.01-0.01c-0.67 0.83-1.66 1.31-2.73 1.31h-3.11v1h3.11c1.37 0 2.65-0.61 3.5-1.68l0.01 0.01 0.94-1.17-0.78-0.63-0.93 1.16zM13.65 10.35l1.65 1.65h-1.9c-1.05 0-2.03-0.47-2.7-1.28l-4.27-5.26-0.01 0.01c-0.85-0.93-2.05-1.46-3.31-1.46h-3.11v1h3.11c1 0 1.95 0.43 2.61 1.17l4.16 5.130 0c0.86 1.08 2.14 1.69 3.52 1.69h1.9l-1.65 1.65 0.71 0.71 2.85-2.85-2.85-2.85-0.71 0.71z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfControlShuffle;
