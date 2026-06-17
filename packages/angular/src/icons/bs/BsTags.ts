import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-tags",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTags {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 2v4.59l7 7L14.59 9l-7-7zM2 2a1 1 0 0 1 1-1h4.59a1 1 0 0 1 0.710.29l7 7a1 1 0 0 1 0 1.41l-4.59 4.59a1 1 0 0 1-1.41 0l-7-7A1 1 0 0 1 2 6.59z"}],["path",{"d":"M5.5 5a0.50.5 0 1 1 0-1 0.50.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.09a1 1 0 0 0 0.290.71L8.75 15.25l-0.040.04a1 1 0 0 1-1.41 0l-7-7A1 1 0 0 1 0 7.59V3a1 1 0 0 1 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTags;
