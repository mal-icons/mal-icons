import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-gallery-thumbnail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssGalleryThumbnail {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-200v-560h560v560H40Zm640-320v-240h240v240H680Zm60-60h120v-120H740v120ZM100-260h440v-440H100v440Zm60-100h320L375-500l-75 100-55-73-85 113Zm520 160v-240h240v240H680Zm60-60h120v-120H740v120Zm-640 0v-440 440Zm640-320v-120 120Zm0 320v-120 120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssGalleryThumbnail;
