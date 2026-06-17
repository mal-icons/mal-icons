import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-credit-card-2-front-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCreditCard2FrontFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h2a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zm0 3a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1zm0 2a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1zm3 0a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1zm3 0a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1zm3 0a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCreditCard2FrontFill;
