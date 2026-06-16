import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-confirmation-number",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrConfirmationNumber {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 8.54V6c0-1.1-0.9-2-2-2H4c-1.1 0-1.990.89-1.99 2v2.54c0 0.690.33 1.370.94 1.69C3.58 10.58 4 11.24 4 12s-0.43 1.43-1.06 1.76c-0.60.33-0.94 1.01-0.94 1.7V18c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2v-2.54c0-0.69-0.34-1.37-0.94-1.7-0.63-0.34-1.06-1-1.06-1.76s0.43-1.42 1.06-1.76c0.6-0.330.94-1.010.94-1.7zm-9 8.96h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrConfirmationNumber;
