import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-diagnoses-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDiagnosesSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 5 C 13.8 5 12 6.8 12 9 C 12 11.2 13.8 13 16 13 C 18.2 13 20 11.2 20 9 C 20 6.8 18.2 5 16 5 z M 16 13 L 14.62 13 C 12.82 13 11.17 13.98 10.29 15.52 C 11 15.6 11.62 15.98 12.02 16.53 C 12.54 15.59 13.53 15 14.62 15 L 17.38 15 C 17.82 15 18.23 15.09 18.61 15.26 C 18.82 14.57 19.32 14.02 19.96 13.73 C 19.2 13.26 18.31 13 17.38 13 L 16 13 z M 16 7 C 17.12 7 18 7.88 18 9 C 18 10.12 17.12 11 16 11 C 14.88 11 14 10.12 14 9 C 14 7.88 14.88 7 16 7 z M 21 15 A 1 1 0 0 0 21 17 A 1 1 0 0 0 21 15 z M 10 17 A 1 1 0 0 0 10 19 A 1 1 0 0 0 10 17 z M 22.73 17.81 C 22.28 18.24 21.67 18.5 21 18.5 C 20.95 18.5 20.89 18.5 20.84 18.49 L 22.09 21.41 L 22.28 21.88 L 22.81 21.97 L 27.81 22.97 L 28.19 21.03 L 23.72 20.12 L 22.73 17.81 z M 15 18 A 1 1 0 0 0 15 20 A 1 1 0 0 0 15 18 z M 8.37 19.9 L 8.28 20.12 L 3.81 21.03 L 4.19 22.97 L 9.19 21.97 L 9.72 21.88 L 9.91 21.41 L 10.31 20.48 C 10.21 20.49 10.1 20.5 10 20.5 C 9.38 20.5 8.8 20.27 8.37 19.9 z M 18 21 A 1 1 0 0 0 18 23 A 1 1 0 0 0 18 21 z M 2 25 L 2 27 L 30 27 L 30 25 L 2 25 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDiagnosesSolid;
