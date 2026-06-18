import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-jirasoftware",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJirasoftware {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c-2.35 2.4-2.37 6.190.13 8.59l3.41 3.41-3.2 3.2a6.5 6.5 0 0 1 1.41 7.04l9.57-9.57a0.950.95 0 0 0 0-1.34L12 0zm-1.75 1.74L0.67 11.33a0.950.95 0 0 0 0 1.34C4.45 16.44 8.22 20.24 12 24c2.3-2.3 2.4-6.1-0.08-8.53l-3.47-3.47 3.2-3.2c-1.92-1.95-2.36-4.72-1.39-7.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJirasoftware;
