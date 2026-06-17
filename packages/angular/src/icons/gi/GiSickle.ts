import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-sickle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSickle {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M257.56 25.16c353.16 276.87 16.92 408.9-87.87 293.25l-40.75 37.13 50.81 50.35c217.56 181.36 524.73-252.06 77.81-380.72zM110.75 364.28c-5.52 1.07-8.97 2.96-11.31 5.25-1.96 1.92-3.25 4.56-4.25 7.56l55.19 52.84c5.47-1.01 9.26-2.8 11.28-4.69 2-1.87 3.1-3.86 3.1-7.53l-54-53.44zm-24.72 30.31L30.41 445.28C13.67 472.28 45.1 506.48 81.5 489.94l51.53-50.28-47-45.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSickle;
