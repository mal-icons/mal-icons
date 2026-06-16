import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-minor-crash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMinorCrash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.5 24c0.82 0 1.5-0.67 1.5-1.5v-7.16c0-0.22-0.04-0.45-0.11-0.66l-1.97-5.67C18.72 8.42 18.16 8 17.5 8h-11c-0.66 0-1.210.42-1.42 1.01l-1.97 5.67c-0.070.21-0.110.43-0.110.66v7.16c0 0.830.68 1.5 1.5 1.5S6 23.33 6 22.5V22h12v0.5c0 0.830.67 1.5 1.5 1.5zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5zm9 0c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.5zM8.71 5.71a11 0 0 1-1.41 0L5.71 4.12a11 0 1 1 1.41-1.41L8.71 4.3c0.390.380.39 1.02 0 1.41zm9.58-3c0.390.390.39 1.02 0 1.41L16.7 5.71a11 0 1 1-1.41-1.41l1.59-1.59a11 0 0 1 1.41 0zM12 5c-0.55 0-1-0.45-1-1V1c0-0.550.45-1 1-1s1 0.45 1 1v3c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMinorCrash;
