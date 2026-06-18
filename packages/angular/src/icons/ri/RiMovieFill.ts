import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-movie-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMovieFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 3.99C2 3.44 2.46 3 2.99 3H21.01C21.56 3 22 3.44 22 3.99V20.01C22 20.56 21.54 21 21.01 21H2.99C2.44 21 2 20.56 2 20.01V3.99ZM10.62 8.41C10.56 8.37 10.48 8.35 10.4 8.35C10.18 8.35 10 8.53 10 8.75V15.25C10 15.33 10.02 15.41 10.07 15.47C10.19 15.66 10.44 15.71 10.62 15.59L15.5 12.33C15.54 12.3 15.58 12.27 15.61 12.22C15.73 12.04 15.68 11.79 15.5 11.67L10.62 8.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMovieFill;
