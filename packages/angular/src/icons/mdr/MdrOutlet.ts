import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-outlet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrOutlet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 12c-0.55 0-1-0.45-1-1V8c0-0.550.45-1 1-1s1 0.45 1 1v3c0 0.55-0.45 1-1 1zm4 6h-2c-0.55 0-1-0.45-1-1v-0.89c0-1 0.68-1.92 1.66-2.08A2 2 0 0 1 14 16v1c0 0.55-0.45 1-1 1zm3-7c0 0.55-0.45 1-1 1s-1-0.45-1-1V8c0-0.550.45-1 1-1s1 0.45 1 1v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrOutlet;
