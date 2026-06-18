import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-materialformkdocs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMaterialformkdocs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.03 18.770.78 1.17-5.42 2.71L0 16.45V4.06l5.42-2.71 5.3 7.95 7.87-5.24L24 1.35V16.84l-5.42 2.71zm2.02-13.83v13.25l3.95-1.97V2.97zM5.08 2.64 1.46 4.45 12.73 21.36l3.62-1.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMaterialformkdocs;
