import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-cell-merge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCellMerge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M130-130v-220h60v160h160v60H130Zm480 0v-60h160v-160h60v220H610ZM287-341l-43-42 67-67H90v-60h221l-67-67 43-42 139 139-139 139Zm386 0L534-480l139-139 43 42-67 67h221v60H649l67 67-43 42ZM130-610v-220h220v60H190v160h-60Zm640 0v-160H610v-60h220v220h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCellMerge;
