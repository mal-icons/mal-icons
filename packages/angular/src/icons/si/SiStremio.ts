import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-stremio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiStremio {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a1.2 1.2 0 0 0-0.850.35L0.35 11.15c-0.470.47-0.47 1.23 0 1.7L11.15 23.65a1.2 1.2 0 0 0 1.7 0l10.8-10.8c0.47-0.470.47-1.23 0-1.7L12.850.35A1.2 1.2 0 0 0 12 0zm-1.67 7.59a0.20.2 0 0 1 0 0 0.20.2 0 0 1 0.130.04l5.73 4.21a0.20.2 0 0 1 0 0.32l-5.73 4.21a0.20.2 0 0 1-0.32-0.16v-8.43a0.20.2 0 0 1 0.19-0.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiStremio;
