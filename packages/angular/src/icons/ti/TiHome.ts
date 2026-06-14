import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiHome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3s-6.19 5.34-9.64 8.23c-0.20.18-0.360.45-0.360.77 0 0.550.45 1 1 1h2v7c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-4h4v4c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-7h2c0.55 0 1-0.45 1-1 0-0.32-0.15-0.58-0.38-0.77-3.43-2.89-9.62-8.23-9.62-8.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiHome;
