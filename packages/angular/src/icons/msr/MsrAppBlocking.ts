import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-app-blocking",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAppBlocking {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260-40q-24.75 0-42.37-17.62T200-100v-760q0-24.75 17.63-42.37T260-920h440q24.75 0 42.38 17.63T760-860v146h-60v-56H260v580h440v-56h60v146q0 24.75-17.62 42.38T700-40H260Zm0-60h440v-30H260v30Zm460-220q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-50q15.77 0 30.89-4Q766-378 778-387L627-538q-8 13-12.5 27.46T610-481q0 46 31.9 78.5T720-370Zm94-52q8-13 12-27.79 4-14.78 4-30.21 0-46.2-31.9-78.1Q766.2-590 720-590q-15.77 0-30.89 4Q674-582 662-574l152 152ZM260-830h440v-30H260v30Zm0 0v-30 30Zm0 730v-30 30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAppBlocking;
