import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-no-crash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfNoCrash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.92 9.01C18.72 8.42 18.16 8 17.5 8h-11c-0.66 0-1.210.42-1.42 1.01L3 15v8c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1v-1h12v1c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1v-8l-2.08-5.99zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5zm9 0c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.5zM12 6.36 9.17 3.54l1.41-1.41L12 3.54 15.54 0l1.41 1.41L12 6.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfNoCrash;
