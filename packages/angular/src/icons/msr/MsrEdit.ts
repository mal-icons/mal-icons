import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-edit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrEdit {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l41.82-41.82Q725-853 750.5-852.5T793-835l43 43q17 17 17 42t-16.96 41.96L794-666ZM150.33-120q-12.89 0-21.61-8.71Q120-137.43 120-150.31v-85.63Q120-242 122-247q2-5 7-10l495-495 128 128-495 495q-5 5-10.22 7-5.22 2-10.78 2h-85.67ZM645-645l-22-22 44 44-22-22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrEdit;
