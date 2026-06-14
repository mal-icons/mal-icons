import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-folder",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiFolder {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 6h-6c0-1.1-0.9-2-2-2h-4c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3v-8c0-1.65-1.35-3-3-3zm-12 0h4c0 1.10.9 2 2 2h6c0.55 0 1 0.45 1 1h-14v-2c0-0.550.45-1 1-1zm12 12h-12c-0.55 0-1-0.45-1-1v-7h14v7c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiFolder;
