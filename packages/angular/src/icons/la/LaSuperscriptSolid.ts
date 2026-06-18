import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-superscript-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSuperscriptSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 24.97 3 C 23.34 3 22 4.34 22 5.97 L 22 6 L 24 6 L 24 5.97 C 24 5.42 24.42 5 24.97 5 L 25.03 5 C 25.58 5 26 5.42 26 5.97 C 26 6.29 25.86 6.57 25.59 6.75 L 23.47 8.22 C 22.55 8.85 22 9.89 22 11 L 22 12 L 28 12 L 28 10 L 24.53 10 C 24.57 9.97 24.55 9.9 24.59 9.88 L 26.72 8.41 C 27.52 7.85 28 6.95 28 5.97 C 28 4.34 26.66 3 25.03 3 Z M 4.16 8 L 5.16 9.53 L 9.31 16 L 5.16 22.47 L 4.16 24 L 10.53 24 L 10.84 23.53 L 12.5 20.97 L 14.16 23.53 L 14.47 24 L 20.84 24 L 19.84 22.47 L 15.69 16 L 19.84 9.53 L 20.84 8 L 14.47 8 L 14.16 8.47 L 12.5 11.03 L 10.84 8.47 L 10.53 8 Z M 7.81 10 L 9.47 10 L 11.66 13.44 L 12.5 14.75 L 13.34 13.44 L 15.53 10 L 17.19 10 L 13.66 15.47 L 13.31 16 L 13.66 16.53 L 17.19 22 L 15.53 22 L 13.34 18.56 L 12.5 17.25 L 11.66 18.56 L 9.47 22 L 7.81 22 L 11.34 16.53 L 11.69 16 L 11.34 15.47 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSuperscriptSolid;
