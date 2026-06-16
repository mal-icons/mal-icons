import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-swipe-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSwipeLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M127-740h113q8 0 14 6t6 14q0 8-6 14t-14 6H110q-12.75 0-21.37-8.62T80-730v-130q0-8 6-14t14-6q8 0 14 6t6 14v73q81-64 174-98.5T490-920q125.48 0 224.74 51T867-724q5 8 2 16t-11.44 8q-10.56 0-20.03-5.52Q828.06-711.03 822-720q-52-78-137.5-119T490-880q-99.97 0-191.98 35.5T127-740ZM470-80q-21.88 0-41.94-8T392-112L202-302q-8-8-9-19t5-20l1-1q11-16 28.5-22.5T264-366l96 26v-340q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T420-680v381q0 15-12 24t-26 5l-86-23 139.18 139.18Q442-147 451.13-143.5q9.13 3.5 18.87 3.5h170q42 0 71-29t29-71v-180q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T800-420v180q0 66-47 113T640-80H470Zm47.18-490q12.83 0 21.33 8.63T547-540v140q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T487-400v-140q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62Zm126 40q12.83 0 21.33 8.63T673-500v100q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T613-400v-100q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62ZM578-265Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSwipeLeft;
