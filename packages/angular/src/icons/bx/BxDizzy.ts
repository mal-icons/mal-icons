import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-dizzy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxDizzy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}],["path",{"d":"M10.71 12.29 9.41 11l1.29-1.29-1.41-1.41L8 9.59 6.71 8.29 5.29 9.71 6.59 11l-1.29 1.29 1.41 1.41L8 12.41l1.29 1.29zm6.59-4L16 9.59l-1.29-1.29-1.41 1.41L14.59 11l-1.29 1.29 1.41 1.41L16 12.41l1.29 1.29 1.41-1.41L17.41 11l1.29-1.29zM10 16h4v2h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxDizzy;
