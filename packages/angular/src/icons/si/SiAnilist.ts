import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-anilist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAnilist {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 17.53v2.42c0 0.71-0.39 1.1-1.1 1.1h-5l-0.06-0.16L11.84 3.74c0.11-0.50.46-0.79 1.05-0.79h2.42c0.71 0 1.10.39 1.1 1.1v12.38H22.9c0.71 0 1.10.39 1.1 1.1zM11.03 2.95l6.34 18.1h-4.92l-1.05-3.13H6.02l-1.08 3.13H0L6.36 2.95h4.67zm-0.66 10.96-1.69-5.01-1.54 5.01h3.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAnilist;
