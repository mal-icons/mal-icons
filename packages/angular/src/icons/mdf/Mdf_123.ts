import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-123",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdf_123 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 15H5.5v-4.5H4V9h3v6zm6.5-1.5h-3v-1h2c0.55 0 1-0.45 1-1V10c0-0.55-0.45-1-1-1H9v1.5h3v1h-2c-0.55 0-1 0.45-1 1V15h4.5v-1.5zm6 0.5v-4c0-0.55-0.45-1-1-1H15v1.5h3v1h-2v1h2v1h-3V15h3.5c0.55 0 1-0.45 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdf_123;
