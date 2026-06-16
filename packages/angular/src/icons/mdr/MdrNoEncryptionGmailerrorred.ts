import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-no-encryption-gmailerrorred",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNoEncryptionGmailerrorred {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2h-4.66L20 17.56V10c0-1.1-0.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.32 0-4.26 1.59-4.82 3.74L8.9 6.46V6zm-3.78-0.49a11 0 1 0-1.41 1.41l1.33 1.33C4.42 8.6 4 9.25 4 10v10c0 1.10.9 2 2 2h12.78l0.290.29a11 0 1 0 1.41-1.41L5.12 5.51z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNoEncryptionGmailerrorred;
