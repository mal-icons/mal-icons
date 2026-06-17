import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-flask-florence",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFlaskFlorence {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 0a0.50.5 0 0 0 0 1H6v5.42a5 5 0 1 0 4 0V1h0.5a0.50.5 0 0 0 0-1zM9 2h-0.5a0.50.5 0 0 0 0 1H9v1h-0.5a0.50.5 0 0 0 0 1H9v1h-0.5a0.50.5 0 0 0 0 1h0.56a0.50.5 0 0 0 0.270.23A4 4 0 0 1 8 15a4 4 0 0 1-1.33-7.770.50.5 0 0 0 0.33-0.47V1h2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFlaskFlorence;
