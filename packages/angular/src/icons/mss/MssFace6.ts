import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-face-6",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFace6 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm-0.05-740Q358-820 266-744.5T148-554h79l88-156h331l88 156h78q-26-115-117.5-190.5T479.95-820Zm-0.21 680Q622-140 721-239.5T820-480v-14H699l-88-156H350l-88 156H140v14q0 141 99.27 240.5Q338.53-140 479.74-140ZM353.78-383Q331-383 315.5-398.72q-15.5-15.73-15.5-38.5Q300-460 315.73-475.5q15.73-15.5 38.5-15.5Q377-491 392.5-475.27q15.5 15.73 15.5 38.5Q408-414 392.28-398.5q-15.73 15.5-38.5 15.5Zm253 0Q584-383 568.5-398.72q-15.5-15.73-15.5-38.5Q553-460 568.73-475.5q15.73-15.5 38.5-15.5Q630-491 645.5-475.27q15.5 15.73 15.5 38.5Q661-414 645.28-398.5q-15.73 15.5-38.5 15.5ZM480-710Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFace6;
