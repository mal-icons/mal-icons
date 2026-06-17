import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bolivia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBolivia {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M43.9 68.83c29.68-4.99 63.93-12.9 148.31-53.05l32.89 102.21L369.21 161.28l7.59 96.48 61.81 3.51 29.5 72.34-25.28 59c-32.53-13.45-59.84-33.26-121.5-11.24-16.16 19.13-23.68 57.28-33.71 89.9-76.82-14.4-136.7-9.87-168.56 25.99L50.92 293.58c10.33-68.28 10.42-141.92-7.02-224.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBolivia;
