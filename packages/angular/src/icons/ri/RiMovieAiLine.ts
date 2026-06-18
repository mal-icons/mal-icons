import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-movie-ai-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMovieAiLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.71 8.13L20.47 8.69C20.29 9.11 19.71 9.11 19.53 8.69L19.29 8.13C18.85 7.12 18.06 6.32 17.07 5.88L16.31 5.54C15.9 5.36 15.9 4.76 16.31 4.58L17.03 4.26C18.04 3.81 18.84 2.97 19.28 1.93L19.53 1.32C19.71 0.89 20.29 0.89 20.47 1.32L20.72 1.93C21.16 2.97 21.96 3.81 22.97 4.26L23.69 4.58C24.1 4.76 24.1 5.36 23.69 5.54L22.93 5.88C21.94 6.32 21.15 7.12 20.71 8.13ZM2.99 3H14V5H4V19H20V11H22V20.01C22 20.56 21.54 21 21.01 21H2.99C2.44 21 2 20.56 2 20.01V3.99C2 3.44 2.46 3 2.99 3ZM10.62 8.41L15.5 11.67C15.68 11.79 15.73 12.04 15.61 12.22C15.58 12.27 15.54 12.3 15.5 12.33L10.62 15.59C10.44 15.71 10.19 15.66 10.07 15.47C10.02 15.41 10 15.33 10 15.25V8.75C10 8.53 10.18 8.35 10.4 8.35C10.48 8.35 10.56 8.37 10.62 8.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMovieAiLine;
