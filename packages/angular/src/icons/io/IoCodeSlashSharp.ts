import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-code-slash-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCodeSlashSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polygon",{"points":"161.98 397.63 0 256 161.98 114.37 189.63 145.98 64 256 189.63 366.02 161.98 397.63"}],["polygon",{"points":"350.02 397.63 322.37 366.02 448 256 322.37 145.98 350.02 114.37 512 256 350.02 397.63"}],["polygon",{"points":"222.15 442 182 430.08 289.85 70 330 81.92 222.15 442"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCodeSlashSharp;
