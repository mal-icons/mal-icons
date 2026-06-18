import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-astral",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAstral {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.44 0C0.64 0 0 0.64 0 1.44v21.12C0 23.360.64 24 1.44 24h21.12c0.8 0 1.44-0.64 1.44-1.44V1.44C24 0.64 23.36 0 22.56 0Zm4.8 4.8h11.52c0.8 0 1.440.64 1.44 1.44V19.2h-6.62v-4.32h-1.15v4.32H4.8V6.24c0-0.80.64-1.44 1.44-1.44m4.03 5.47v1.15h3.46v-1.15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAstral;
