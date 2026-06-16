import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-stream",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoStream {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M130-430q-20 0-35-15t-15-35q0-20 15-35t35-15q20 0 35 15t15 35q0 20-15 35t-35 15Zm73 269-43-43 173-173 43 43-173 173Zm130-424L161-757l43-43 172 172-43 43ZM480-80q-20 0-35-15t-15-35q0-20 15-35t35-15q20 0 35 15t15 35q0 20-15 35t-35 15Zm0-700q-20 0-35-15t-15-35q0-20 15-35t35-15q20 0 35 15t15 35q0 20-15 35t-35 15Zm147 195-43-43 172-172 43 43-172 172Zm129 423L584-334l43-43 172 172-43 43Zm74-268q-20 0-35-15t-15-35q0-20 15-35t35-15q20 0 35 15t15 35q0 20-15 35t-35 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoStream;
