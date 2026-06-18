import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nuget",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNuget {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.34a2 2 0 1 0 0 4 2 2 0 0 0 0-3.99zm9.18 4.34a6.16 6.16 0 0 0-6.15 6.16v6.67c0 3.4 2.76 6.15 6.15 6.15h6.67c3.4 0 6.15-2.75 6.15-6.15v-6.67a6.15 6.15 0 0 0-6.15-6.15zm-1.48 2.8a2.5 2.5 0 1 1 0 4.99 2.5 2.5 0 0 1 0-4.99zm7.97 6.16a4 4 0 1 10 7.99 4 4 0 0 1 0-7.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNuget;
