import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-42-group",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Fab_42Group {
  readonly viewBox = "0 0 640 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320 96V416C341.01 416 361.82 411.86 381.23 403.82C400.64 395.78 418.28 384 433.14 369.14C448 354.28 459.78 336.64 467.82 317.23C475.86 297.82 480 277.01 480 256C480 234.99 475.86 214.18 467.82 194.77C459.78 175.36 448 157.72 433.14 142.86C418.28 128.01 400.64 116.22 381.23 108.18C361.82 100.14 341.01 96 320 96ZM0 256L160 416L320 256L160 96L0 256ZM480 256C480 277.01 484.14 297.82 492.18 317.23C500.22 336.64 512.01 354.28 526.86 369.14C541.72 384 559.36 395.78 578.77 403.82C598.18 411.86 618.99 416 640 416V96C597.57 96 556.87 112.86 526.86 142.86C496.86 172.87 480 213.57 480 256Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Fab_42Group;
