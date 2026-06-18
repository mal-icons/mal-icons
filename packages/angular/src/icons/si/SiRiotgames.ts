import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-riotgames",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRiotgames {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.460.86 0 7.09l3.35 12.76 2.55-0.31-0.7-8.020.84-0.37 1.45 8.2 4.36-0.53-0.77-8.860.83-0.37 1.59 9.03 4.41-0.54-0.85-9.710.84-0.37 1.74 9.87L24 17.32V3.5Zm0.32 19.360.22 1.26L24 23.14v-4.18l-10.22 1.26Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRiotgames;
