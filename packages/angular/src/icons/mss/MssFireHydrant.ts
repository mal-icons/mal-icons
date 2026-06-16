import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-fire-hydrant",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFireHydrant {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-80v-60h80v-130h-40q-33 0-56.5-23.5T120-350v-80q0-33 23.5-56.5T200-510h40v-130h-80v-60h88q20-78 83.5-129T480-880q85 0 148.5 51T712-700h88v60h-80v130h40q33 0 56.5 23.5T840-430v80q0 33-23.5 56.5T760-270h-40v130h80v60H160Zm150-620h340q-19-53-65-86.5T480-820q-59 0-105 33.5T310-700Zm-10 560h360v-190h120v-120H660v-190H300v190H180v120h120v190Zm180-110q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0.24-60Q447-310 423.5-333.26q-23.5-23.26-23.5-56.5Q400-423 423.27-446.5q23.26-23.5 56.5-23.5Q513-470 536.5-446.73q23.5 23.26 23.5 56.5Q560-357 536.74-333.5q-23.26 23.5-56.5 23.5ZM480-390Zm0-250Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFireHydrant;
